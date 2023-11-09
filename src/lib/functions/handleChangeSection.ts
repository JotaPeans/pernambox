import { Dirs } from './../types.d';
import { Dispatch, SetStateAction } from "react";


export default function handleChangeSection(
        dir: Dirs, 
        refKeys: string[], 
        sectionSelected: string, 
        setSectionSelected: Dispatch<SetStateAction<string>>,
        refs: any, 
        dataSelected: number,
        handleChangeDataSelected: (n: number) => void
    ) {
        const currentRefIndex = refKeys.indexOf(sectionSelected);
        var key: typeof sectionSelected;

        switch(dir) {
            case "up":
                if(currentRefIndex === 0) break;
                key = refKeys[currentRefIndex - 1] as typeof sectionSelected;

                (refs[key][0] as any).focus();

                setSectionSelected(key);
                handleChangeDataSelected(0);
                break;
                
            case "down":
                if(currentRefIndex === (refKeys.length - 1)) break;
                key = refKeys[currentRefIndex + 1] as typeof sectionSelected;

                (refs[key][0] as any).focus();

                setSectionSelected(key);
                handleChangeDataSelected(0);
                break;

            case "left":
                if(dataSelected > 0) {
                    handleChangeDataSelected(--dataSelected);

                    refs[sectionSelected][dataSelected].focus();
                }

                break;

            case "right":
                if(dataSelected < ( refs[sectionSelected].length - 1 )) {
                    handleChangeDataSelected(++dataSelected);

                    refs[sectionSelected][dataSelected].focus();
                }

                break;
        }
}