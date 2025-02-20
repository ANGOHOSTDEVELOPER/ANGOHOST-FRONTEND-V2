import { StaticImageData } from "next/image";

export interface IClient{
    name: string;
    picture: StaticImageData;
}

 export interface IClientsList {
    type: string;
    clients: IClient[];

}