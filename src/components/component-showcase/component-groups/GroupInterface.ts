interface IGroupInterfaceCopy {
  textToCopy: string;
  titleText: string;
}

interface IGroupInterfaceProp {
  name: string;
  description: string;
  required: string;
  default: string;
  type: string;
  variants: string;
}

export interface IGroupInterface {
  copy: {
    template: IGroupInterfaceCopy;
    import: IGroupInterfaceCopy;
    type: IGroupInterfaceCopy;
  };
  props: IGroupInterfaceProp[];
}
