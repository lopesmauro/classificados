import Link from "next/link"
import { Button } from "./Button"

export const Header = () => {
    return(
        <header className="flex justify-between items-center py-10">
            <Link href={'/'}>
              <div className="text-3xl font-bold ">MF Carros</div>
            </Link>
            <div>
                <Link href={'/add'}>
                    <Button label="Cadastrar"/>
                </Link>
            </div>
        </header>
    )
}
