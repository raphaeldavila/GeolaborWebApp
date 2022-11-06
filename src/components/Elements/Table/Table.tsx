import { useState, useEffect, useContext } from 'react'
import Container, { Refresh } from './style'
import Button from '@components/Elements/Button'
import ButtonNewRegister from '@components/Elements/ButtonNewRegister'
import Link from 'next/link'
import api from '@services/api'
import { dateFormatter } from '@utils/dateFormatter'
import { FaUndoAlt } from "react-icons/fa"
import ProjectContext from "@context/ProjectContext"

export default function Table() {
    const [user, setUser] = useState<any>([])
    const [search, setSearch] = useState(false)
    const { isContent, setContent } = useContext(ProjectContext)

    async function findUsers() {
        const resp = await api.get("/files")
        setContent(resp.data)
    }

    async function refreshFindUsers() {
        findUsers()
    }

    useEffect(() => {
        if (!search) {
            findUsers()
            setSearch(true)
        }
    }, []);

    return (
        <>
            <Container>
                <div className='content__table'>

                    <div className='content__table_filter'>
                        <h2>Registros de importação</h2>
                        <div className='content_table_filter_button'>
                            <ButtonNewRegister title="Nova Importação" />
                            <Refresh onClick={() => refreshFindUsers()}>
                                <FaUndoAlt />
                            </Refresh>
                        </div>
                    </div>

                    <table>
                        <thead>
                            <tr>
                                <th>Referência</th>
                                <th>Data</th>
                                <th>Nome do Arquivo</th>
                                <th>Ação</th>
                            </tr>
                        </thead>
                        <tbody>

                            {Array.from(isContent).map((value: any) => {
                                return (
                                    <tr>
                                        <td className='content__table_reference'>
                                            <Link href={`/${value._id}`}>#{value._id}</Link>
                                        </td>
                                        <td>{dateFormatter(value.createdAt)}</td>
                                        <td>{value.title}</td>
                                        <td className='content__table_button'>
                                            <Link href={`/${value._id}`}><Button title="Editar" type="Edit" /></Link>
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            </Container>
        </>
    )
}