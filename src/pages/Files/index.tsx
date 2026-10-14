import React, { useEffect, useState, type ReactNode } from 'react'
import {type File} from './types.ts'
import { useNavigate, useLocation } from 'react-router-dom'
import Image from "@/components/ui/Image"
import getFiles from '@/middlewares/api.ts'
import Table from '@/components/ui/Table';

import folder_icon from '@/assets/folder.svg'
import file_icon from '@/assets/file.svg'
import Partitions from './Partitions/index.tsx';

const Files = () => {
    
    const [files, setFiles] = useState<File[]>([]);
    
    const navigate = useNavigate();
    const location = useLocation();
    
    // Obtenemos la ruta 
    const currentNavPath = location.pathname;

    const backendPath = currentNavPath.replace(/^\/files\/?/, '') || '/';

    useEffect(() => {
        async function cargarDatos() {
            const datos = await getFiles(backendPath);
            setFiles(datos || []);
        }
        cargarDatos();
    }, [backendPath]);

    const backHandleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        if (backendPath === '/') return;

        const slices = backendPath.split("/");
        slices.pop();
        const parentPath = slices.join("/");

        navigate(parentPath === '/' ? '/files' : '/files' + parentPath);
    }

    const folderHandleClick = (e: React.MouseEvent<HTMLAnchorElement>, folderName: string) => {
        e.preventDefault();
        const nextPath = currentNavPath.endsWith('/') ? `${currentNavPath}${folderName}` : `${currentNavPath}/${folderName}`;
        navigate(nextPath);
    }

    const fileHandleClick = (e: React.MouseEvent<HTMLAnchorElement>, filePath: string) => {
        e.preventDefault();
        const nextPath = currentNavPath.endsWith('/') ? `${currentNavPath}${filePath}` : `${currentNavPath}/${filePath}`
        navigate(nextPath);
    }

    const partitionHandleClick = (partition: string) => {   
        navigate('/files/' + partition);
    }

    const tableRows : ReactNode[][] = [
        ...(backendPath !== '/' ? [[
            <a href="#" onClick={backHandleClick} className="text-blue-400 hover:underline">..</a>
        ]] : []),
        ...files.map((file) => [
            <div className="flex">
                <Image
                    imgSource={file.is_directory ? folder_icon : file_icon}
                    style="size-6 m-2 cursor-pointer"
                />
                <a
                    href="#"
                    className="text-blue-400 hover:underline"
                    onClick={(e) => file.is_directory
                        ? folderHandleClick(e, file.name)
                        : fileHandleClick(e, backendPath + file.name)}
                >
                    {file.name}
                </a>
            </div>
            ,
            file.size,
            file.modified
        ])
    ];

    return (
        <div>
            <div>
                <h2 className="justify-center">Archivos del sistema</h2>
                <p className="text-sm text-gray-400 mb-2">Ruta actual: {backendPath}</p>

                <Partitions
                    onClick={partitionHandleClick}
                />

                {tableRows.length > 0 ? (
                    <Table
                        columnsHeaders={["name", "size", "modified"]}
                        rows={tableRows}
                    />
                ) : (
                    <p className="text-gray-500 italic mt-4">Esta carpeta está vacía.</p>
                )}
            </div>
        </div>
    )
}

export default Files
