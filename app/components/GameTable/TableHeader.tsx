import React from 'react';

interface HeaderItem {
    key: string;
    label: string;
}

interface TableHeaderProps {
    headers: HeaderItem[];
    className?: string;
    thClassName?: string;
}

const TableHeader: React.FC<TableHeaderProps> = ({
                                                     headers,
                                                     className = "text-gray-600 uppercase text-base leading-normal",
                                                     thClassName = "px-3 text-left"
                                                 }) => {
    return (
        <thead>
        <tr className={className}>
            {headers.map((header) => (
                <th key={header.key} className={thClassName}>
                    {header.label}
                </th>
            ))}
        </tr>
        </thead>
    );
};

export default TableHeader;