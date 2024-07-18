import { Menu, MenuItem, MenuList } from "@mui/material";
import { Button } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Link from "next/link";
import React from "react";

export default function UserAccount() {
    const userName = "John Doe";
    const userAvatar = "/placeholder-user.jpg";

    const UserAvatar = ({size}: { size: string }) => (
        <Avatar src={userAvatar} className={`${size} ${size}`}/>
    );

    return (
        <Menu open>
            <Button variant="contained" size="small" className="rounded-full">
                <UserAvatar size="h-8 w-8"/>
                <span className="sr-only">Toggle user menu</span>
            </Button>
            <MenuList>
                <div className="flex items-center gap-2">
                    <UserAvatar size="h-12 w-12"/>
                    <div className="grid gap-0.5">
                        <div className="text-base font-bold">{userName}</div>
                    </div>
                </div>
                <MenuItem>
                    <Link href="#" className="flex items-center gap-2" prefetch={false}>
                        <span>Sign out</span>
                    </Link>
                </MenuItem>
            </MenuList>
        </Menu>
    )
}
