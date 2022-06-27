import { useState } from 'react';
import {
    Button,
    Confirm,
    DeleteButton,
    useListContext,
    useUpdateMany,
} from 'react-admin';

const CustomUpdatePostsButton = () => {
    const { selectedIds } = useListContext();
    const [open, setOpen] = useState(false);

    const [updateMany, { isLoading }] = useUpdateMany(
        'posts',
        { ids: selectedIds, data: { views: 0 } }
    );

    const handleClick = () => setOpen(true);
    const handleDialogClose = () => setOpen(false);
    const handleConfirm = () => {
        updateMany();
        setOpen(false);
    };

    return (
        <>
            <DeleteButton onClick={handleClick}/>
            <Button label="Update Posts" onClick={handleClick} />
            <Confirm
                isOpen={open}
                loading={isLoading}
                title="Apagar Streamer"
                content="Tens a certeza que queres apagar estes streamers? A operação não é reversível."
                onConfirm={handleConfirm}
                onClose={handleDialogClose}
            />
        </>
    );
};