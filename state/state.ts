import { reactive } from 'vue'

export const store = reactive({
    items: [0],
    add() {
        this.items.push(Math.round(Math.random() * 100))
    }
})
