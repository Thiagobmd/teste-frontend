import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterByProf'
})
export class FilterByProfPipe implements PipeTransform {

  // AQUI FAZ O FILTRO CONFORME A PROFISSÃO SELECIONADA
  transform(items: any, selProf?: any): any {
    return selProf ? items.filter(sal => sal.profissao === selProf) : items;
}

}
