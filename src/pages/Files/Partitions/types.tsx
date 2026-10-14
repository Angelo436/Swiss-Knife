    export type PartitionsProps = {
    onClick?: (partition: string) => void;
}

export type Partition = {
    name: string;
    mount_point: string
    file_system: string
    total_space: Space
    available_space: Space
};

export type Space = {
    size: number
    unit: string
}