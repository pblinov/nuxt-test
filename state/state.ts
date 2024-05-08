import {reactive} from 'vue'
import {SymbolKind} from "vscode-languageserver-types";
import Array = SymbolKind.Array;

interface BasketItem {
    name: string,
    quantity: number
}

interface Basket {
    items: BasketItem[]
}

export const store: Basket = reactive({
    items: [] as BasketItem[],

    add(text: string, quantity: number) {
        this.items.push({name: text, quantity: quantity})
    }
})
