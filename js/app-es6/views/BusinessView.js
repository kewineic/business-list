import {View} from "./View.js";
import {DateHelper} from "../helpers/DateHelper.js";
import {currentInstance} from "../controllers/BusinessController.js"

export class BusinessView extends View{

    constructor(element){
        super(element);

        element.addEventListener('click', function(event){
            if(event.target.nodeName == 'TH'){
                currentInstance().sortting(event.target.textContent.toLowerCase());
            }
        })
    }

    template(model){
        return `
        <table class="table table-hover table-bordered">
            <thead>
                <tr>
                    <th>DATA</th>
                    <th>QUANTIDADE</th>
                    <th>VALOR</th>
                    <th>VOLUME</th>
                </tr>
            </thead>
        
            <tbody>
                ${model.negotiations.map(item =>`
                        <tr>
                            <td>${DateHelper.dateToString(item.date)}</td>
                            <td>${item.amount}</td>
                            <td>${item.value}</td>
                            <td>${item.volume.toFixed(2)}</td>
                        </tr>
                    `).join('')}
            </tbody>
        
            <tfoot>
                <td colspan="3"></td>
                <td>
                    ${model.totalVolume.toFixed(2)}
                </td>
            </tfoot>
        </table>`
    }

}