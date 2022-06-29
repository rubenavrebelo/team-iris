import jsonServerProvider from 'ra-data-json-server';

const dataProvider = jsonServerProvider('https://www.rubenrebelo.xyz');

const convertFileToBase64 = (file: any) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file.rawFile);

    reader.onload = () => resolve(reader.result);
    reader.onerror = reject;
  });

const myDataProvider = {
  ...dataProvider,
  update: (resource: any, params: any) => {
    console.log(params.data.avatar);
    if (
      resource !== 'streamers' ||
      !params.data.avatar ||
      typeof params.data.avatar === 'string'
    ) {
      return dataProvider.update(resource, params);
    }

    const newPicture = params.data.avatar;

    return Promise.resolve(convertFileToBase64(newPicture))
      .then((picture64) => ({
        src: picture64,
        title: `${params.data.avatar.title}`,
      }))
      .then((transformedNewPictures) =>
        dataProvider.update(resource, {
          ...params,
          data: {
            ...params.data,
            avatar: transformedNewPictures,
          },
        })
      );
  },
  create: (resource: any, params: any) => {
    if (resource !== 'streamers' || !params.data.avatar) {
      return dataProvider.create(resource, params);
    }
    const newPicture = params.data.avatar;

    return Promise.resolve(convertFileToBase64(newPicture))
      .then((picture64) => ({
        src: picture64,
        title: `${params.data.avatar.title}`,
      }))
      .then((transformedNewPictures) =>
        dataProvider.create(resource, {
          ...params,
          data: {
            ...params.data,
            avatar: transformedNewPictures,
          },
        })
      );
  },
};

export default myDataProvider;
