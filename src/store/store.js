import {observable, action, computed} from 'mobx'

class RootStore {
    constructor() {
        this.appStore = new AppStore()
        // this.applyStore = new ApplyStore()
    }
}

// class ApplyStore {}

class AppStore {
    @observable name = ''
    @observable idno = ''
    @observable mrid = ''
    @observable mrlist = [
        {
            key: '1',
            mrid: '2020082',
            name: '张三',
            indate: '2020-01-30',
            diagnosis: '肠伤寒',
            checked: false,
        },
        {
            key: '2',
            mrid: '2020832',
            name: '张三',
            indate: '2020-05-01',
            diagnosis: '脐突病',
            checked: false,
        },
        {
            key: '3',
            mrid: '2020103',
            name: '张三',
            indate: '2020-08-14',
            diagnosis: '脐风病',
            checked: false,
        },
        {
            key: '4',
            mrid: '2020138',
            name: '张三',
            indate: '2020-01-30',
            diagnosis: '胎黄病',
            checked: false,
        },
        {
            key: '5',
            mrid: '2020831',
            name: '张三',
            indate: '2020-07-10',
            diagnosis: '夏季热病',
            checked: false,
        },
        {
            key: '6',
            mrid: '2020981',
            name: '张三',
            indate: '2020-03-24',
            diagnosis: '痛风',
            checked: false,
        },
        {
            key: '7',
            mrid: '2020582',
            name: '张三',
            indate: '2020-08-24',
            diagnosis: '伤寒',
            checked: false,
        },
    ]

    @computed get sortedMrList() {
        return this.mrlist
            .slice()
            .sort((x, y) => x.indate.localeCompare(y.indate))
    }
    @computed get selectedMr() {
        return this.mrlist.filter((mr) => mr.checked)
    }

    @action setMrlist(newList) {
        this.mrlist = newList
    }
    @action setName(value) {
        this.name = value
    }
    @action.bound
    setValue(fields, value) {
        console.log(fields, value)
        this[fields] = value
    }
}

export default new RootStore()
