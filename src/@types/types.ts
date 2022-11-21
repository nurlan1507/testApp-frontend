export interface IQuestion{
  type:string;
  description:string;
  answers:Map<string,IAnswer>;
  point:number;
  changeData():void;
  draw():JSX.Element;
  changeCorrect(key:string|null,previousKey:string|null):void;

  // drawEditingMenu():React.FC;
}
export interface IAnswer{
  value:string;
  correct :boolean;
}

export interface ITest{
  title:string;
  description:string;
  groupId:string;
  authorName:string;
  startDate:number;
  questions:Array<IQuestion>;
}
