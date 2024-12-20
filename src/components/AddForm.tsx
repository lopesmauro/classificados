import { createCar } from "@/actions/createCar"
import { Button } from "./Button"

export const AddForm = () => {
    return (
        <form action={createCar}>
            <label className='block border border-gray-500 p-4 mb-3'>
                <input type='file' name='img' className="bg-transparent text-white text-lg w-full outline-none"/>
            </label>
            <label className='block border border-gray-500 p-4 mb-3'>
                <input type='text' name='title' placeholder='Insira o título aqui' className="bg-transparent text-white text-lg w-full outline-none"/>
            </label>
            <label className='block border border-gray-500 p-4 mb-3'>
                <input type='number' name='price_from' placeholder='Digite o preço antigo' className="bg-transparent text-white text-lg w-full outline-none"/>
            </label>
            <label className='block border border-gray-500 p-4 mb-3'>
                <input type='number' name='price_to' placeholder='Digite o preço novo' className="bg-transparent text-white text-lg w-full outline-none"/>
            </label>
            <label className='block border border-gray-500 p-4 mb-3'>
                <input type='checkbox' name='negotiable' className="bg-transparent text-white text-lg w-full outline-none"/>
                Negociável
            </label>
            <label className='block border border-gray-500 p-4 mb-3'>
                <input type='text' name='author_name' placeholder='Digite o nome do vendedor' className="bg-transparent text-white text-lg w-full outline-none"/>
            </label>
            <label className='block border border-gray-500 p-4 mb-3'>
                <input type='email' name='author_email' placeholder='Digite o email do vendedor' className="bg-transparent text-white text-lg w-full outline-none"/>
            </label>
            <label className='block border border-gray-500 p-4 mb-3'>
                <textarea name="description" rows={4} className="resize-none bg-transparent text-white text-lg w-full outline-none"></textarea>
            </label>

            <Button label='Cadastrar'/>
        </form>
    )
}
