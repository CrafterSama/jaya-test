/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import LineChart from './LineChart';

const GraphGenerator = () => {
    const [content, setContent] = React.useState();
    const [textarea, setTextarea] = React.useState();
    const [headers, setHeaders] = React.useState();
    const [data, setData] = React.useState();
    const [dropDownValues, setDropDownValues] = React.useState();

    const onChange = event => {
        setTextarea(event.target.value);
    };

    const onSelect = event => {
        const update = { ...dropDownValues };
        const { name, value } = event.target;
        const what = name === 'x-axis' ? 'xaxis' : 'yaxis';
        setDropDownValues({ ...update, [what]: value });
    };

    const csvToJSON = csv => {
        const lines = csv.replace(', ', ',').split('\n');
        const result = [];
        const headrs = lines[0].replace(', ', ',').split(',');
        for (let i = 1; i < lines.length; i += 1) {
            const obj = {};
            const currentline = lines[i].replace(', ', ',').split(',');
            for (let j = 0; j < headrs.length; j += 1) {
                obj[headrs[j].trim()] = currentline[j].trim();
            }
            result.push(obj);
        }
        return JSON.stringify(result);
    };

    const csvHeaders = csv => {
        const lines = csv.replace(', ', ',').split('\n');
        const headrs = lines[0].replace(', ', ',').split(',');
        setHeaders(headrs);
    };

    const onCreateChart = event => {
        event.preventDefault();
        const { xaxis, yaxis } = dropDownValues;
        const gdata = [];
        JSON.parse(content).forEach(item => gdata.push({ x: item[xaxis], y: item[yaxis] }));
        setData(gdata);
    };

    const onObtainData = event => {
        event.preventDefault();
        setData();
        const result = csvToJSON(textarea);
        setContent(result);
        csvHeaders(textarea);
    };

    return (
        <div className="row mt-4">
            <div className="col-md-6">
                <form onSubmit={onObtainData}>
                    <div className="form-group">
                        <label htmlFor="to-capture">Insert Your CSV Content</label>
                        <textarea className="form-control" id="to-capture" name="to-capture" onChange={onChange} rows="10" />
                        <button type="submit" className="btn btn-primary mt-4">
                            Process
                        </button>
                    </div>
                </form>
            </div>
            <div className="col-md-6">
                <form onSubmit={onCreateChart}>
                    <div className="form-group">
                        <label htmlFor="to-capture">Result and DropDown</label>
                        <div className="alert alert-secondary">
                            <code className="code">CSV toJSON: {content}</code>
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="x-axis">Select the X-Axis</label>
                        <select className="form-control" id="x-axis" name="x-axis" onChange={onSelect}>
                            <option>{headers ? 'Select The X-Axis' : 'Put the CSV Content'}</option>
                            {headers
                                ? headers.map((item, key) => (
                                      <option key={key} value={item}>
                                          {item}
                                      </option>
                                  ))
                                : ''}
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="y-axis">Select the Y-Axis</label>
                        <select className="form-control" id="y-axis" name="y-axis" onChange={onSelect}>
                            <option>{headers ? 'Select The Y-Axis' : 'Put the CSV Content'}</option>
                            {headers
                                ? headers.map((item, key) => (
                                      <option key={key} value={item}>
                                          {item}
                                      </option>
                                  ))
                                : ''}
                        </select>
                        <button type="submit" className="btn btn-primary mt-4">
                            Generate
                        </button>
                    </div>
                </form>
            </div>
            {data ? <LineChart datas={data} /> : ''}
        </div>
    );
};

export default GraphGenerator;
