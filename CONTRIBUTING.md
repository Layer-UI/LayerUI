# ️ Contributing to LayerUI

We’re excited to have you contribute to **LayerUI**! Your ideas and efforts are essential to making this library even better. This guide will show you how easy it is to add a new component.

## Getting Started

1. **Fork the Repository**  
   Click [here](https://github.com/Layer-UI/LayerUI/fork) to fork the LayerUI repository.

2. **Clone your forked repository to your local machine**
```bash
   git clone https://github.com/<YOUR_USERNAME>/layerui.git
```

3. **Navigate to the project directory**

```bash
cd layerui
```

4. **Create a new branch for your component**

```bash
git checkout -b my-new-component
```

5. **Install dependencies and run the project**

```bash
yarn install
yarn dev
```

## Adding a New Component

**Create Your Component**

Add your component file in `packages/ui/src/sections`. Use lowercase for the filename.

**Example:**

```bash
import { ArrowLeft } from 'lucide-react';
import Heading from "@/components/ui/heading";
import React from 'react';

export default function Button() {
  return (
    <>
      <Heading />
      <button className="rounded-full px-4 py-2 bg-black">
        Get Started
        <ArrowLeft />
      </button>
    </>
  );
}

```

**Use Subcomponents if Needed**
If your component has subcomponents, make sure they are imported from `packages/ui/src/components/ui`.

**Example:**

```bash
import Heading from "@/components/ui/heading";
```

**Adding sources(Images)**

If your component requires images, add them in `apps/web/public`.

## Submitting Your Contribution

```bash
git add .
git commit -m "Add new Button component"
git push origin my-new-component
```

Finally, open a pull request (PR) from your branch to the main repository and link it to any relevant issue.

---

Thank you for contributing to LayerUI! Your contributions make the library better for everyone 🚀.
