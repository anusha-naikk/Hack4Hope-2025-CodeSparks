import React from 'react';
import { useLocation } from 'react-router-dom';
import TrialCard from './TrialCard';

interface Trial {
    NCTId: string;
    briefTitle: string;
    condition: string;
    LocationCity: string;
    LocationState: string;
    LocationCountry: string;
}

const TrialsPage = () => {
    const location = useLocation();
    const trials = (location.state as { trials?: Trial[] })?.trials || [];

    console.log('Fetched trials:', trials); // <-- ADD THIS LINE

    return (
        <div>
            <h1>Clinical Trial Results</h1>
            {trials.length > 0 ? (
                trials.map((trial: Trial) => (
                    <TrialCard key={trial.NCTId} trial={trial} />
                ))
            ) : (
                    <p>No trials found for your profile. Please refine your search.</p>
                )}
        </div>
    );
};

export default TrialsPage;