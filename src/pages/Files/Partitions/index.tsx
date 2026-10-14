import { useState, useEffect, memo } from 'react'
import Image from '@/components/ui/Image'
import ssd from '@/assets/ssd.svg'
import {type Partition, type PartitionsProps} from "./types"
import getPartitions from './api';

const Partitions = (props: PartitionsProps) => {
  const [partitions, setPartitions] = useState([])
  
  useEffect(() => {
    async function cargarDatos() {
      const datos = await getPartitions();
      setPartitions(datos || []);
    }
    cargarDatos();
  }, []);

  return (
    <div className="flex gap-0.5">
      {partitions.length > 0 ? (
        partitions.map((partition : Partition, index) => (
          <div className="flex p-2.5 bg-cyan-800 gap-3 rounded-tr-3xl border-l-gray-400 border-l-2"
            key={index}
          >
            <Image
              imgSource={ssd}
              style="size-8"
              onClick={() => props.onClick?.(partition.mount_point)}
            />
            {partition.mount_point}
          </div>
        ))
      ): (
        <p>No hay particiones</p>
      )}
    </div>
  )
}

export default memo(Partitions)