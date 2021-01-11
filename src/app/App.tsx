import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from './rootReducer';
import {
    displayRepo,
    setCurrentDisplayType,
    setCurrentPage
} from 'features/issuesDisplay/issuesDisplaySlice';

const App: React.FC = () => {
    const dispatch = useDispatch();

    const { org, repo, displayType, page, issueId } = useSelector(
        (state: RootState) => state.issuesDisplay
    );

    const setOrgAndRepo = (org: string, repo: string) => {
        dispatch(displayRepo({ org, repo }));
    };

    const setJumpToPage = (page: number) => {
        dispatch(setCurrentPage(page));
    };

    const showIssuesList = () => {
        dispatch(setCurrentDisplayType({ displayType: 'issues' }));
    };

    const showIssueComments = (issueId: number) => {
        dispatch(setCurrentDisplayType({ displayType: 'comments', issueId }));
    };

    return <div>Live reload</div>
};

export default App;