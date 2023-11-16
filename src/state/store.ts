import { create } from 'zustand'
import { Message, SuggestionItem } from '../../types'


interface SharedState {
   suggestions: SuggestionItem[],
   response: string,
   conversation: Message[]

}



const useStore = create<SharedState>((set) => ({
   suggestions: [],
   response: '',
   conversation: []
}))

export default useStore;