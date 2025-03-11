import { FRONTENDTYPE } from '@/types/frontend-type';
import    {create}    from    'zustand';



export    type    ScreenStore    =    {
    screen:    FRONTENDTYPE.IViewCart;
    setScreen:    (screen:    FRONTENDTYPE.IViewCart)    =>    void;
};

export    const    useScreenStore    =    create<ScreenStore>((set)    =>    ({
    screen:    "ViewCart",
    setScreen:    (screen)    =>    set({    screen    }),
}));