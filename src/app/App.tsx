import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from './rootReducer';

import { RepoSearchForm } from 'features/repoSearch/RepoSearchForm';

import {
    displayRepo,
    setCurrentDisplayType,
    setCurrentPage
} from 'features/issuesDisplay/issuesDisplaySlice';

const ORG = 'rails'
const REPO = 'rails'

type CurrentDisplay =
    | {
        type: 'issues'
    }
    | {
        type: 'comments'
        issueId: number
    }

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

    let content;

    if (displayType === 'issues') {
        content = (
            <RepoSearchForm
                org={org}
                repo={repo}
                setOrgAndRepo={setOrgAndRepo}
                setJumpToPage={setJumpToPage}
            />
        )
    }

    return <div>{content}</div>
};

export default App;