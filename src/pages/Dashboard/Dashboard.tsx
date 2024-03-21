import { Menubar, MenubarContent, MenubarItem, MenubarMenu, MenubarSeparator, MenubarShortcut, MenubarTrigger } from '@/components/ui/menubar';
import { Separator } from '@/components/ui/separator';

import { Calendar } from '@/components/Calendar/Calendar';

export const Dashboard = () => {
    return (
        <>
            <div className="overflow-hidden rounded-[0.5rem] border bg-background shadow-md md:shadow-xl">
                <div className="hidden md:block">
                    <Menubar>
                        <MenubarMenu>
                            <MenubarTrigger>Music</MenubarTrigger>
                            <MenubarTrigger>File</MenubarTrigger>
                            <MenubarTrigger>Edit</MenubarTrigger>
                            <MenubarTrigger>View</MenubarTrigger>
                            <MenubarTrigger>Account</MenubarTrigger>
                            <MenubarContent>
                                <MenubarItem>
                                    New Tab <MenubarShortcut>⌘T</MenubarShortcut>
                                </MenubarItem>
                                <MenubarItem>New Window</MenubarItem>
                                <MenubarSeparator />
                                <MenubarItem>Share</MenubarItem>
                                <MenubarSeparator />
                                <MenubarItem>Print</MenubarItem>
                            </MenubarContent>
                        </MenubarMenu>
                    </Menubar>

                    <div className="border-t">
                        <div className="bg-background">
                            <div className="grid lg:grid-cols-5">
                                <div className="pb-12 hidden lg:block">
                                    <div className="space-y-4 py-4">
                                        <div className="px-3 py-2">
                                            <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">Discover</h2>
                                            <div className="space-y-1">
                                                <button className="inline-flex items-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80 h-9 px-4 py-2 w-full justify-start">
                                                    Listen Now{' '}
                                                </button>
                                                <button className="inline-flex items-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80 h-9 px-4 py-2 w-full justify-start">
                                                    Browse{' '}
                                                </button>
                                                <button className="inline-flex items-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80 h-9 px-4 py-2 w-full justify-start">
                                                    Radio{' '}
                                                </button>
                                            </div>
                                        </div>

                                        <div className="px-3 py-2">
                                            <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">Library</h2>
                                            <div className="space-y-1">
                                                <button className="inline-flex items-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80 h-9 px-4 py-2 w-full justify-start">
                                                    Playlist
                                                </button>
                                                <button className="inline-flex items-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80 h-9 px-4 py-2 w-full justify-start">
                                                    Songs{' '}
                                                </button>
                                                <button className="inline-flex items-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80 h-9 px-4 py-2 w-full justify-start">
                                                    Made for You{' '}
                                                </button>
                                                <button className="inline-flex items-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80 h-9 px-4 py-2 w-full justify-start">
                                                    Artists{' '}
                                                </button>
                                                <button className="inline-flex items-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80 h-9 px-4 py-2 w-full justify-start">
                                                    Albums{' '}
                                                </button>
                                            </div>
                                        </div>

                                        <div className="py-2">
                                            <h2 className="relative px-7 text-lg font-semibold tracking-tight">Playlists</h2>

                                            <div dir="ltr" className="relative overflow-hidden h-[300px] px-1">
                                                <div data-radix-scroll-area-viewport="" className="h-full w-full rounded-[inherit]">
                                                    <div className="min-width:100%;display:table">
                                                        <div className="space-y-1 p-2">
                                                            <button className="inline-flex items-center whitespace-nowrap rounded-md text-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2 w-full justify-start font-normal">
                                                                Recently Added
                                                            </button>
                                                            <button className="inline-flex items-center whitespace-nowrap rounded-md text-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2 w-full justify-start font-normal">
                                                                Recently Played
                                                            </button>
                                                            <button className="inline-flex items-center whitespace-nowrap rounded-md text-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2 w-full justify-start font-normal">
                                                                Recently Played
                                                            </button>
                                                            <button className="inline-flex items-center whitespace-nowrap rounded-md text-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2 w-full justify-start font-normal">
                                                                Recently Played
                                                            </button>
                                                            <button className="inline-flex items-center whitespace-nowrap rounded-md text-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2 w-full justify-start font-normal">
                                                                Recently Played
                                                            </button>
                                                            <button className="inline-flex items-center whitespace-nowrap rounded-md text-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2 w-full justify-start font-normal">
                                                                Recently Played
                                                            </button>
                                                            <button className="inline-flex items-center whitespace-nowrap rounded-md text-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2 w-full justify-start font-normal">
                                                                Recently Played
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-span-3 lg:col-span-4 lg:border-l">
                                    <div className="h-full px-4 py-6 lg:px-8">
                                        <div dir="ltr" data-orientation="horizontal" className="h-full space-y-6">
                                            <div className="space-between flex items-center">
                                                <div
                                                    role="tablist"
                                                    aria-orientation="horizontal"
                                                    className="inline-flex h-9 items-center justify-center rounded-lg bg-muted p-1 text-muted-foreground"
                                                    data-orientation="horizontal"
                                                >
                                                    <button
                                                        type="button"
                                                        role="tab"
                                                        aria-selected="true"
                                                        aria-controls="radix-:R1annlbq6la:-content-music"
                                                        data-state="active"
                                                        id="radix-:R1annlbq6la:-trigger-music"
                                                        className="inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow relative"
                                                        data-orientation="horizontal"
                                                        data-radix-collection-item=""
                                                    >
                                                        Music
                                                    </button>
                                                    <button
                                                        type="button"
                                                        role="tab"
                                                        aria-selected="false"
                                                        aria-controls="radix-:R1annlbq6la:-content-podcasts"
                                                        data-state="inactive"
                                                        id="radix-:R1annlbq6la:-trigger-podcasts"
                                                        className="inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow"
                                                        data-orientation="horizontal"
                                                        data-radix-collection-item=""
                                                    >
                                                        Podcasts
                                                    </button>
                                                    <button
                                                        type="button"
                                                        role="tab"
                                                        aria-selected="false"
                                                        aria-controls="radix-:R1annlbq6la:-content-live"
                                                        data-state="inactive"
                                                        data-disabled=""
                                                        id="radix-:R1annlbq6la:-trigger-live"
                                                        className="inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow"
                                                        data-orientation="horizontal"
                                                        data-radix-collection-item=""
                                                    >
                                                        Live
                                                    </button>
                                                </div>

                                                <div className="ml-auto mr-4">
                                                    <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-9 px-4 py-2">
                                                        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-2 h-4 w-4">
                                                            <path
                                                                d="M7.49991 0.876892C3.84222 0.876892 0.877075 3.84204 0.877075 7.49972C0.877075 11.1574 3.84222 14.1226 7.49991 14.1226C11.1576 14.1226 14.1227 11.1574 14.1227 7.49972C14.1227 3.84204 11.1576 0.876892 7.49991 0.876892ZM1.82707 7.49972C1.82707 4.36671 4.36689 1.82689 7.49991 1.82689C10.6329 1.82689 13.1727 4.36671 13.1727 7.49972C13.1727 10.6327 10.6329 13.1726 7.49991 13.1726C4.36689 13.1726 1.82707 10.6327 1.82707 7.49972ZM7.50003 4C7.77617 4 8.00003 4.22386 8.00003 4.5V7H10.5C10.7762 7 11 7.22386 11 7.5C11 7.77614 10.7762 8 10.5 8H8.00003V10.5C8.00003 10.7761 7.77617 11 7.50003 11C7.22389 11 7.00003 10.7761 7.00003 10.5V8H4.50003C4.22389 8 4.00003 7.77614 4.00003 7.5C4.00003 7.22386 4.22389 7 4.50003 7H7.00003V4.5C7.00003 4.22386 7.22389 4 7.50003 4Z"
                                                                fill="currentColor"
                                                                fill-rule="evenodd"
                                                                clip-rule="evenodd"
                                                            ></path>
                                                        </svg>
                                                        Add music
                                                    </button>
                                                </div>
                                            </div>

                                            <div
                                                data-state="active"
                                                data-orientation="horizontal"
                                                role="tabpanel"
                                                aria-labelledby="radix-:R1annlbq6la:-trigger-music"
                                                id="radix-:R1annlbq6la:-content-music"
                                                className="mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 border-none p-0 outline-none"
                                            >
                                                <div className="flex items-center justify-between">
                                                    <div className="space-y-1">
                                                        <h2 className="text-2xl font-semibold tracking-tight">Listen Now</h2>
                                                        <p className="text-sm text-muted-foreground">Top picks for you. Updated daily.</p>
                                                    </div>
                                                </div>
                                            </div>

                                            <Separator />
                                            <div className='flex justify-center items-center'>
                                                <Calendar/>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
