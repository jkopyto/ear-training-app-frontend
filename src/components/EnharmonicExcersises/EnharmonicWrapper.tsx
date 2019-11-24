import { useState, useEffect } from 'react'

type Props = {
    sheetTitle: string
    children: (isLoading: boolean, file: any) => JSX.Element
}

const EnharmonicWrapper = ({sheetTitle, children}: Props) => {
    const [isLoading, setIsLoading] = useState<boolean>(true)
    const [sheetId, setSheetId] = useState<string | undefined>(undefined)
    const [file, setFile] = useState<any>(undefined)

    useEffect(() => {
        function getSheetId() {
            setIsLoading(true)
            try {
                fetch(`${process.env.REACT_APP_API_URL}sheets/title/${sheetTitle}`, {
                    method: 'GET',
                    headers: {
                        'content-type': 'application/json',
                        'x-auth-token': `${process.env.REACT_APP_DOWNLOAD_USER}`
                    }
                })
                    .then(res => res.json())
                    .then(res => {
                        setSheetId(res)
                    })
                    .catch(err => {
                        throw new Error(err)
                    })
            } catch (error) {
                throw new Error(error)
            }
        }
        if (isLoading && !sheetId && !file) getSheetId()
    })

    useEffect(() => {
        function getSheetById() {
            try{
                const req = new XMLHttpRequest()
                req.open('GET', `${process.env.REACT_APP_API_URL}sheets/${sheetId}.xml`, true)
                req.onreadystatechange = () => {
                    if (req.readyState === 4) {
                        if (req.status === 200) {
                            setFile(req.responseText)
                            setIsLoading(false)
                        }
                    }
                }
                req.send(null)
            }
            catch(error){
                throw new Error(error)
            }
        }
        if(sheetId && isLoading && !file)getSheetById()
    })

    return (
        children(isLoading, file)
    )
}

export default EnharmonicWrapper