import React from 'react';

type demoProps1 = {
    status: boolean;
}

type demoProps2 = {
    status: number;
}

type demoProps = demoProps1 | demoProps2;

type DataFetchProps = { 
    status: "loading" | "error" | "success";
 }

const DataFetch = ({ status }: DataFetchProps) => {

    if(status === "loading") {
        return <h2>Data is loading...</h2>
    }
    else if(status === "error") {
        return <h2>Error. Data could not fecthed</h2>
    }

    return (
        <div>
            <h2>Data Fetched successfully</h2>
        </div>
    );
};

export default DataFetch;