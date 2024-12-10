'use client';

import { generateUUID } from '@/utils/string';
import { useEffect, useState } from 'react';
import { getModelId } from './actions';
import { Chat } from './chat';
import Image from 'next/image';

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
                        <div className="size-full">
                            <div className="h-screen w-full bg-[url('/assets/chatbot/alien.svg')] bg-cover"></div>
                        </div>
                        <div className="absolute left-0 top-0 w-full">
                            <Image src="/assets/chatbot/gradient.png" alt="Gradient" width={1920} height={1080} className="h-full object-cover" />
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
