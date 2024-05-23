import * as _ from 'lodash'
import moment from 'moment'

const Id = async () => {
    const res = await _.uniqueId() + new Date().valueOf()
    return res
}

export {
    Id
}
// console.log(Id, '====')
