export interface IMenu {
  icon: string
  name: string
  link: string
  subMenu?: IMenu[]
}
