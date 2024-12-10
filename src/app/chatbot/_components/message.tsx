'use client';

import { cn } from '@/utils/classname';
import type { Attachment, ToolInvocation } from 'ai';
import { motion } from 'framer-motion';
import Image from 'next/image';
import type { ReactNode } from 'react';
import { Markdown } from './markdown';

export const Message = ({
    role,
    content,
}: {
    role: string;
    content: string | ReactNode;
    toolInvocations: ToolInvocation[] | undefined;
    attachments?: Attachment[];
}) => {
    return (
        <motion.div
            className="group/message mx-auto w-full max-w-full"
            initial={{ y: 5, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            data-role={role}
        >
            <div
                className={cn('flex w-full max-w-full gap-4 py-1', {
                    'justify-end': role === 'user',
                })}
            >
                {role === 'assistant' && (
                    <div className="flex size-12 items-center justify-center rounded-full">
                        <Image
                            src="/assets/chatbot/char-alien.svg"
                            alt="Animation 1"
                            width={480}
                            height={480}
                            className="flex size-12 items-center justify-center rounded-full"
                        />
                    </div>
                )}
                <div
                    className={cn(`flex max-w-[80%] flex-col gap-2 rounded-bl-2xl rounded-tl-2xl rounded-tr-2xl`, {
                        '': role === 'assistant',
                    })}
                >
                    {content && (
                        <div className="flex flex-col gap-4 rounded-lg border border-[#ED3D3D] bg-[#300C0F] px-2 py-1 text-sm font-normal text-[#FF7F7F]">
                            <Markdown>{content as string}</Markdown>
                        </div>
                    )}
                </div>
            </div>
        </motion.div>
    );
};