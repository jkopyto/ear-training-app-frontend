import { useState, useEffect, useCallback } from 'react'

type Props = {
    sheetTitle: string
    children: (isLoading: boolean, file: any) => JSX.Element
}

const EnharmonicWrapper = ({sheetTitle, children}: Props) => {
    const [isLoading, setIsLoading] = useState<boolean>(true)
    const [file, setFile] = useState<any>(undefined)

    const getSheetId = useCallback(() => {
        const abortController = new AbortController()
        const signal = abortController.signal
        try {
            /* <--ProjApkInt-->
            *
            *  W tym miejscu pobierane są z backendu pliki XML zawierające strukturę partytury
            */
            fetch(`${process.env.REACT_APP_API_URL}sheets/title/${sheetTitle}`, {
                method: 'GET',
                signal: signal,
                headers: {
                    'content-type': 'application/json',
                    'x-auth-token': `${process.env.REACT_APP_DOWNLOAD_USER}`
                }
            })
                .then(res => res.json())
                .then(res => {
                    getSheetById(res)
                })
                .catch(err => {
                    throw new Error(err)
                })
        } catch (error) {
            throw new Error(error)
        }

        return function cleanup(){
            abortController.abort()
        }
    }, [sheetTitle])

    function getSheetById(id:string) {
        try {
            const req = new XMLHttpRequest()
            req.open('GET', `${process.env.REACT_APP_API_URL}sheets/${id}.xml`, true)
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
        catch (error) {
            throw new Error(error)
        }
    }
    
    const sheetIdGetter = useCallback(() => {
        getSheetId()
    }, [getSheetId])

    useEffect(() => {
        if(isLoading) sheetIdGetter()
    },[isLoading, sheetIdGetter])

    useEffect(() => setIsLoading(true), [sheetTitle])

    return (
        children(isLoading, file)
    )
}

export default EnharmonicWrapper