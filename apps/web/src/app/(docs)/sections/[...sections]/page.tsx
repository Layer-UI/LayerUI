"use client"

import ComponentPreview from '@repo/ui/componentpreview';
import { useParams } from 'next/navigation'
import React from 'react'

export default function Page() {
    const params = useParams<{ sections: string }>()
    const path = Array.isArray(params.sections) ? params.sections.join('/') : params.sections;
    return (
        <ComponentPreview componentName={params.sections[1]} tag={params.sections[0]} filePath={path}></ComponentPreview>
    )
}
