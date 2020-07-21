import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'questionsPipe'
})
export class QuestionsPipePipe implements PipeTransform {

  transform(value: Array<any>, options: Array<any>): unknown {
    if (!options[1] || !options[0] || !value) return []
    const subpanel = options[0],
          comments = options[1],
          share = options[2] || undefined
    let filtred = value.map(v => v)
    //answered
    if (subpanel['answered'] === true){
      filtred = filtred.filter( question => comments.some((comment : object) => comment['question'] === question.id) )
    }
    //resolved
    if (subpanel['resolved'] === true){
      filtred = filtred.filter( question => comments.some((comment : object) => comment['question'] === question.id && comment['solution'] === true)  )
    }
    //date filter
    if (subpanel['date'] !== 'All dates'){
      filtred = filtred.filter( question => {
        const dater = (subpanel['date'] === 'Last day') ? 1 :
                      (subpanel['date'] === 'Last week') ? 7 : 30
        return new Date().getTime() - question.date < 86401000 * dater
      })
    }
    //categories filter
    if (subpanel['categories'] !== 'All categories'){
      filtred = filtred.filter( question => JSON.parse(question['tags']).some( (tag : string) => tag === subpanel['categories']))
    }
    if (share !== undefined) share.next(filtred.length)
    return filtred
  }

}
