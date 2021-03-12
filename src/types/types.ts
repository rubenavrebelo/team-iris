export interface StreamerObject {
    twitchName: string;
    description: string;
    url: string;
    avatar: string;
    pronouns: string[];
    trailerUrl: string;
} 

export interface PronounsObject {
    [pronoun: string]: string
}

export const Pronouns: PronounsObject = {
    he: 'He/Him',
    she: 'She/Her',
    they: 'They/Them',
    it: 'It/Its',
    per: 'Per/Per',
    ve: 'Ve/Ver',
    xe: 'Xe/Xem',
    zie: 'Zie/Hir',
    other: 'Other'
}

// Dummy Streamer Object for testing
export const Eevo : StreamerObject = {
    twitchName: 'Eevolicious',
    description: `Your favorite Portuguese chaotic magical girl who's sole purpose is to be stanned by you. Her favorite color is "homophonic tears" and her favorite wig is a broccoli. If you just found out about the channel, you're late, hurry up and follow.`,
    url: 'https://www.twitch.tv/eevolicious',
    avatar: 'https://static-cdn.jtvnw.net/jtv_user_pictures/63e1b530-642c-462a-b34f-e048b7469975-profile_image-300x300.png',
    pronouns: ['he', 'she'],
    trailerUrl: 'https://www.youtube.com/embed/rsxNclwPTvw?controls=0'
}