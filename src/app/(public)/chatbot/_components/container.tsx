'use client';

import { generateUUID } from '@/utils/string';
import { useEffect, useState } from 'react';
import { getModelId } from './actions';
import { Chat } from './chat';

export default function ChatbotContainer() {
    const id = generateUUID();

    const [selectedModelId, setSelectedModelId] = useState<string | null>(null);

    useEffect(() => {
        const fetchModelId = async () => {
            const modelId = await getModelId();
            setSelectedModelId(modelId);
        };
        fetchModelId();
    }, []);

    if (!selectedModelId) {
        return <></>;
    }

    return (
        <section className="h-full max-h-screen w-full overflow-hidden">
            <div className="flex h-full w-full">
                <div className="w-1/2">
                    <div className="relative">
                        <div className="w-full h-screen">
                            <video src="/assets/chatbot/video.mp4" className='h-screen w-full object-cover' autoPlay loop muted />
                        </div>
                    </div>
                </div>
                <div className="w-1/2">
                    <div className="relative">
                        <Chat key={id} id={id} initialMessages={[]} selectedModelId={selectedModelId} />
                    </div>
                </div>
            </div>
        </section>
    );
}
