# ReactLib

This project is a personal React Component library designed to simplify and accelerate development by providing ready-to-use components for various projects.

## Usage

All my components will use this TypeScript interface:

```typescript
export interface Component {
    label: string;
    data: string;
    link: string;
    sub: Component[];
}
```

**Property explanations:**
- **label**: Name of the main component or element (required)
- **data**: Can contain any data: descriptions, links, images, etc. (required)
- **link**: Link to a page or resource (e.g., `localhost:3000/myCrazyStory` or `localhost:3000/family.png`) (required)
- **sub**: Recursive call to other components (enables hierarchical structures) (required)

## Implementation Example

Here's an example for a navigation bar:

```typescript
const navData: Component = {
    label: "Main Navigation",
    data: "MyNavBar",
    link: "",
    sub: [
        {
            label: "Home",
            data: "",
            link: "#",
            sub: []
        },
        {
            label: "About",
            data: "About us",
            link: "/about",
            sub: [
                { 
                    label: "Team History", 
                    data: "Learn more about us", 
                    link: "/about/team", 
                    sub: [] 
                },
            ]
        },
        {
            label: "Services",
            data: "Our services",
            link: "/services",
            sub: [
                { 
                    label: "Web Development", 
                    data: "Web", 
                    link: "/services/web", 
                    sub: [] 
                },
                { 
                    label: "Mobile Apps", 
                    data: "Mobile", 
                    link: "/services/mobile", 
                    sub: [] 
                },
            ]
        },
        {
            label: "Contact",
            data: "Contact information",
            link: "/contact",
            sub: []
        }
    ]
};
```

Here we have the main component storing all our data and sub-data, displaying it as desired. Check the NavBar component for more details about my implementation vision.

## Component List

This list will be updated as I add new components.

| Name | Usage | Component / Tag |
|------|-------|----------------|
| NavBar | Custom navigation bar with:<br>- Toggleable menu options<br>- Subcomponent display on hover or toggle<br>- Responsive design | `<NavBar data={navData} />` |


## Contributing

This is a personal library, but suggestions are welcome via issues or pull requests.
