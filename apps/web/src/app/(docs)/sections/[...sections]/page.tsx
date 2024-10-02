"use client"

import ComponentPreview from '@/components/uicomponentslayout/ComponentPreview'
import { useParams } from 'next/navigation'
import React from 'react'

export default function Page() {
    const params = useParams<{ sections: string }>()
    const path = Array.isArray(params.sections) ? params.sections.join('/') : params.sections;
    return (
        <ComponentPreview  filePath={path || 'default/path'} />
    )
}
