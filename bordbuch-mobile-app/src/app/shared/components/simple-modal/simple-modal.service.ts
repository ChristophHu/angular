import { Injectable } from '@angular/core'

@Injectable({
  providedIn: 'root'
})
export class SimpleModalService {

    private modals: any[] = []

    open(id: string) {
        const modal = this.modals.find(x => x.id === id)
        modal.open()
    }

    add(modal: any) {
        this.modals.push(modal)
    }

    remove(id: string) {
        this.modals = this.modals.filter(x => x.id !== id)
    }

    close(id: string) {
        const modal = this.modals.find(x => x.id === id)
        modal.close()
    }
}
