export interface  IOpenClipart{
 padload: IPayLoad[]
}
export interface IPayLoad{
    title:string;
    svg:ISvg;
}
export interface ISvg{
    url:string;
}