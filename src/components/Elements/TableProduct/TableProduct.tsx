import { useState, useContext } from "react"
import Container, { Bread, ButtonDelete } from './style'
import { useRouter } from 'next/router'
import ProjectContext from "@context/ProjectContext"
import Link from 'next/link'
import { useEffect } from "react"
import api from "@services/api"
import { Toastiy } from "@services/toast"
import { dateFormatter } from '@utils/dateFormatter'

export default function TableProduct() {
    const { isContent, setContent } = useContext(ProjectContext)
    const router = useRouter()
    const id = router.query.id

    const [title, setTitle] = useState<String>()
    const [created, setCreated] = useState<any>()
    const [headers, setHeaders] = useState<any>([])
    const [dataFile, setDataFile] = useState<any>([])
    const [search, setSearch] = useState(false)
    const [quantity, setQuantity] = useState<Number>(0)

    async function findUser() {
        const resp = await api.get("/file/" + id)
        let quantidade
        setContent(resp)
        setTitle(resp.data.title)
        setHeaders(resp.data.header)
        setCreated(resp.data.createdAt)
        setDataFile(Object.values(resp.data.data))
        setQuantity(Object.values(resp.data.data).length)
    }

    async function deleteFile() {
        const resp = await api.delete("/file/" + id)
        Toastiy("success", "Importação excluída com sucesso!")
        setTimeout(() => router.push('/'), 2000)
    }

    useEffect(() => {
        if (!search) {
            findUser()
            setSearch(true)
        }
    }, []);

    return (
        <>
            <Container>
                <div className='content__table'>

                    <div className='content__table_filter'>
                        <div className="content__table_filter_start">
                            <h2>{title}</h2>
                            <h4>Data da importação: {dateFormatter(created)}</h4>
                        </div>
                        <div className='content__table_filter_bread'>
                            <Bread> <Link href='/'>  Voltar </Link> / {title}</Bread>
                        </div>
                    </div>

                    <div className="content__table_overflow">
                        <table>
                            <thead>
                                <tr>
                                    {
                                        headers.map((item: any) => {
                                            return (
                                                <th>{item}</th>
                                            )
                                        })
                                    }
                                </tr>
                            </thead>
                            <tbody>

                                {
                                    dataFile.map((element: any) => {
                                        for (var i = 0; i <= quantity; i++) {
                                            return (
                                                <>
                                                    <tr>
                                                        <td>{Object.values(element)[i]}</td>
                                                        <td>{Object.values(element)[i + 1]}</td>
                                                        <td>{Object.values(element)[i + 2]}</td>
                                                        <td>{Object.values(element)[i + 3]}</td>
                                                        <td>{Object.values(element)[i + 4]}</td>
                                                        <td>{Object.values(element)[i + 5]}</td>
                                                        <td>{Object.values(element)[i + 6]}</td>
                                                    </tr>
                                                </>
                                            )
                                        }
                                    })
                                }

                            </tbody>
                        </table>
                    </div>

                    <div className='content__table_action'>
                        <ButtonDelete onClick={() => deleteFile()}>
                            Deletar Importação
                        </ButtonDelete>
                    </div>
                </div>
            </Container>
        </>
    )
}