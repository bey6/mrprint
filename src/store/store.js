import {observable, action} from 'mobx'

class RootStore {
    constructor() {
        this.appStore = new AppStore()
        // this.applyStore = new ApplyStore()
    }
}

// class ApplyStore {}

class AppStore {
    @observable name = 'liubei'
    @observable mrlist = [
        {
            id: 1,
            mrid: 'M022091',
            name: '马思',
            indate: '2020-08-10',
        },
        {
            id: 2,
            mrid: '2020193',
            name: '文颖',
            indate: '2020-08-10',
        },
        {
            id: 3,
            mrid: '2020987',
            name: '鸿安',
            indate: '2020-01-14',
        },
        {
            id: 4,
            mrid: '2020127',
            name: '康凯',
            indate: '2020-03-01',
        },
    ]

    @action setMrlist(newList) {
        this.mrlist = newList
    }
    @action setName(value) {
        this.name = value
    }
}

export default new RootStore()
