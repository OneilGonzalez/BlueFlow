import { Injectable } from '@angular/core';


interface IModal{
  id:string;
  visible:boolean;
}

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  private modals: IModal[] = []

  constructor() { }
  
  register(id: string){
    this.modals.push({
      id,
      visible:false
    })
  }

  unregister(id: string){
    this.modals = this.modals.filter(
      element => element.id !== id
    )
  }

  isModalOpen(id:string) : boolean{
    return !!this.modals.find(element => element.id === id)?.visible  //Optional chaining- if the find does not return an object the code will stop at question mark and will not attempt to access visible                 
    //!! makes the value boolean like true false true- short way to convert non boolean to a boolean value.
    //Boolean(this.modals.find(element => element.id === id)?.visible)
}
  toggleModal(id: string) {
    const modal= this.modals.find(element => element.id === id)

    if(modal){
      modal.visible= !modal.visible
    }
    //this.visible = !this.visible
  }


  
}
