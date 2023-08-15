import './Progressbar.scss';
import styled from 'styled-components'
import { totalItems, progressData } from '../../utils';

const Progressbar = styled.div`
    width: 100%;
    height: 25px;
    background-color: #fff;    
    border-radius: 20px;
    position: relative;

`;

const Progress = styled.span`
    position: absolute;
    width: ${({ done, total }) => (done / total) * 100}%;
    height: 100%;
    background-color: #2ecc71;    
    border-radius: 20px;
`;

const ProgressBar = () => {
    return (
        <>
            <h2>You've completed {progressData()}/{totalItems} items</h2>
            <div className="propgressbar-section">
                <Progressbar>
                    <Progress done={progressData()} total={totalItems} />
                </Progressbar>
            </div>
        </>
    )
}

export default ProgressBar;
