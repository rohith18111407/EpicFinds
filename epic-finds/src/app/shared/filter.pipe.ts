import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  standalone: true
})
export class FilterPipe implements PipeTransform {

  //filterString is the value that we need to filter out such as product name
  //propName is the tyep needs to be filtered out such as title
  transform(value:any[],filterString:string,propName:string) {
    const result:any=[];
    if(!value || filterString===''|| propName===''){
      return value;
    }
    //Loop into the value array and check for the filterString propName that matches 
    value.forEach((a:any)=>{
      if(a[propName].trim().toLowerCase().includes(filterString.toLowerCase())){
        result.push(a);
      }
    });
    return result;
  }

}
