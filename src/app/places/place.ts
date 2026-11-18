import { ObjectType } from './objectType.type';

export type Place = {
  id:number;
  imageUrl:string;
  name:string;
  type:ObjectType;
  city:string;
  country:string;
  rating:number;
  price?:string;
  tags:string[];
  shortDescription:string;
  description:string;
  isExpanded?:boolean;
}
