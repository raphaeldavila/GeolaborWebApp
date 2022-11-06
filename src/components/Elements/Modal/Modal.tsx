import { useState, useContext } from "react"
import Container, { Content, Confirmation, ButtonConfirmation } from './style'
import { FileUploader } from "react-drag-drop-files"
import { FaTimesCircle } from "react-icons/fa"
import ProjectContext from "@context/ProjectContext"
import { ConvertJson } from "@services/convertJson"
import { Toastiy } from "@services/toast"
import api from '@services/api'

export default function Button() {

    const { setModal, setContent } = useContext(ProjectContext)
    const fileReader = new FileReader()
    const fileTypes = ["CSV"]
    const [file, setFile] = useState(null)
    const [fileName, setFileName] = useState<String>('')
    const handleChange = (files: any) => {
        setFile(files[0])
        setFileName(files[0].name)
    }

    const resetFile = () => {
        setFile(null)
    }

    const changeModal = () => {
        setModal(false)
    }

    const sendFile = (e: React.MouseEvent<HTMLElement>) => {
        e.preventDefault
        if (file) {
            fileReader.onload = async function (event) {
                const csvOutput = event?.target?.result
                const data = String(csvOutput)
                const returnConvert = ConvertJson(data)
                const jsonModel = [{ title: fileName, header: returnConvert[1], data: returnConvert[0] }]
                const stringfy = JSON.stringify(jsonModel)
                const createData = await api.post('/file', JSON.parse(stringfy))
                const resp = await api.get("/files")
                setContent(resp.data)
            }
            fileReader.readAsBinaryString(file)
        }
        setFile(null)
        setTimeout(() => setModal(false), 1000)
        Toastiy("success", "arquivo importado com sucesso!")
    }

    const conditionalConfirmation = () => {
        if (file) {
            return (
                <Confirmation>
                    <div className="content__confirmation">
                        <ButtonConfirmation content="reset" onClick={resetFile}>
                            Limpar
                        </ButtonConfirmation>
                        <ButtonConfirmation content="confirmation" onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => sendFile(e)}>
                            Enviar
                        </ButtonConfirmation>
                    </div>
                </Confirmation>
            )
        }
    }

    return (
        <>
            <Container>
                <form>
                    <div className='modal__close'>
                        <div className='modal__close_icon' onClick={changeModal}>
                            <FaTimesCircle />
                        </div>
                    </div>
                    <Content>
                        <div className="content__title_modal">
                            <h2>Faça o upload do seu arquivo</h2>
                            <p>*Apenas arquivos em extensão .CSV serão aceitas na importação</p>
                        </div>
                        <div>
                            <FileUploader
                                multiple={true}
                                handleChange={handleChange}
                                name="file"
                                types={fileTypes}
                            />
                            <p>{file ? `Nome do arquivo: ${fileName}` : "Nenhum arquivo selecionado"}</p>
                        </div>
                    </Content>
                    {conditionalConfirmation()}
                </form>
            </Container>
        </>
    )
}