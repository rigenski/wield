'use client';

import type { Attachment, ChatRequestOptions, CreateMessage, Message } from 'ai';
import type { Dispatch, SetStateAction } from 'react';
import React, { useCallback, useRef } from 'react';
import { toast } from 'sonner';
import { useWindowSize } from 'usehooks-ts';

import { cn } from '@/utils/classname';
import { Textarea } from './textarea';

export function MultimodalInput({
    input,
    setInput,
    isLoading,
    attachments,
    setAttachments,
    handleSubmit,
    className,
    placeholder = 'ASK HIM ANYTHIING',
}: {
    input: string;
    setInput: (value: string) => void;
    isLoading: boolean;
    stop: () => void;
    attachments: Attachment[];
    setAttachments: Dispatch<SetStateAction<Attachment[]>>;
    messages: Message[];
    setMessages: Dispatch<SetStateAction<Message[]>>;
    append: (message: Message | CreateMessage, chatRequestOptions?: ChatRequestOptions) => Promise<string | null | undefined>;
    handleSubmit: (
        event?: {
            preventDefault?: () => void;
        },
        chatRequestOptions?: ChatRequestOptions
    ) => void;
    className?: string;
    placeholder?: string;
}) {
    const textareaRef = useRef<HTMLTextAreaElement>(null);
    const { width } = useWindowSize();

    const handleInput = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setInput(event.target.value);
    };

    const submitForm = useCallback(() => {
        handleSubmit(undefined, {
            experimental_attachments: attachments,
        });

        setAttachments([]);

        if (width && width > 768) {
            textareaRef.current?.focus();
        }
    }, [attachments, handleSubmit, setAttachments, width]);

    return (
        <div className="w-full">
            <Textarea
                ref={textareaRef}
                value={input}
                onChange={handleInput}
                placeholder={placeholder}
                className={cn('relative z-20 min-h-[57px] resize-none overflow-hidden placeholder:text-[#FF7F7F] bg-[#ED3D3D]/10 border  border-[#ED3D3D]', className)}
                onKeyDown={(event: React.KeyboardEvent<HTMLTextAreaElement>) => {
                    if (event.key === 'Enter' && !event.shiftKey) {
                        event.preventDefault();

                        if (isLoading) {
                            toast.error('Please wait for the model to finish its response!');
                        } else {
                            submitForm();
                        }
                    }
                }}
            />
        </div>
    );
}
