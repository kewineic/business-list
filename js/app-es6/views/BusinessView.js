import {View} from "./View.js";
import {DateHelper} from "../helpers/DateHelper.js";

export class BusinessView extends View{

    constructor(element){
        super(element);
    }

    template(model){
        return `
        <table class="table table-hover table-bordered">
            <thead>
                <tr>
                    <th onclick="businessController.sortting('date')">DATA</th>
                    <th onclick="businessController.sortting('amount')">QUANTIDADE</th>
                    <th onclick="businessController.sortting('value')">VALOR</th>
                    <th onclick="businessController.sortting('volume')">VOLUME</th>
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