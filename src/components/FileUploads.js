import { useDropzone } from "react-dropzone"
import { DeleteForever } from '@mui/icons-material'
import { IconButton, Typography, Box } from "@mui/material"

const FileUpload = ({ files, errors, touched, setFieldValue }) => {

    const { getRootProps, getInputProps } = useDropzone({
        accept: 'images/*',
        onDrop: (acceptFile) => {
            const newFiles = acceptFile.map(file => {
                return {
                    ...file,
                    preview: URL.createObjectURL(file)
                }
            })

            setFieldValue('files', [
                ...files,
                ...newFiles])
        }
    })

    const handleRemoveFile = (filePath) => {
        const newFiles = files.filter(file => file.path !== filePath)
        setFieldValue('files', newFiles)
    }

    return (
        <>

            <Box sx={{ backgroundColor: '#e8e3e9', padding: '4px' }}>
                <Typography component='h6' variant="h6" color={errors && files ? 'error' : 'black'} gutterBottom>
                    Imagens
                </Typography>
                {
                    errors && files
                        ? <Typography variant='body2' color='error' gutterBottom>{errors}</Typography>
                        : null

                }
                <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
                    <Box sx={{
                        width: 200,
                        height: 150,
                        bgcolor: '#e8e3e9',
                        border: '2px dashed black',
                        display: 'flex',
                        justifyContent: "center",
                        alignItems: 'center',
                        textAlign: 'center',
                        cursor: 'pointer'
                    }}{...getRootProps()}>
                        <input name='files' {...getInputProps()} />
                        <Typography variant='body2' color="#000" >
                            Clique para adicionar ou arraste uma imagem aqui.
                        </Typography>
                    </Box>
                    {
                        files.map((file, index) => (
                            <Box key={file.name} sx={{
                                backgroundImage: `url(${file.preview})`,
                                position: 'relative',
                                margin: '0px 15px 15px 0px',
                                width: '200px',
                                height: '150px',
                                backgroundSize: 'cover',
                                backgroundPosition: 'center center',
                            }}
                            >
                                <Box sx={{
                                    height: '100%',
                                    "&:hover": {

                                        display: 'flex',
                                        backgroundColor: 'rgba(0, 0, 0, 0.7)',
                                        '& .delBtn': { display: 'flex' }
                                    }
                                }}
                                >
                                    {
                                        index === 0 ?
                                            <Box sx={{ position: 'absolute', padding: '6px 10px', bottom: 0, left: 0, bgcolor: '#9c27b0' }}>
                                                <Typography variant='body' color='#fff'>
                                                    Principal
                                                </Typography>
                                            </Box>
                                            : null
                                    }
                                    <IconButton sx={{ width: '20%', height: '20%', marginLeft: '80px', marginTop: '50px' }}
                                        onClick={() => { handleRemoveFile(file.path) }}
                                    >
                                        <DeleteForever sx={{
                                            display: 'none',
                                            color: '#fff'
                                        }}
                                            className='delBtn' fontSize='large' />
                                    </IconButton>
                                </Box>
                            </Box>
                        ))
                    }
                </Box>
            </Box>
        </>
    )
}



export default FileUpload