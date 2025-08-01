import { memo } from "react";
import { useUsersScene } from "./index.hooks";
import { Box, Button, Stack } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { DataGrid } from "@mui/x-data-grid";
import { Widget } from "@/components/Widget";
import { EditUserDialog } from "@/components/EditUserDialog";
import { CreateUserDialog } from "@/components/CreateUserDialog";

export const UsersScene = memo(() => {
  const { 
    columns, 
    usersRows, 
    DeleteUserDialog,
    handleOpenCreateUserDialog,
  } = useUsersScene();


  return (
    <>
      <Box mb={2} display="flex" justifyContent="flex-end">
        <Button 
          onClick={handleOpenCreateUserDialog} 
          variant="contained" 
          startIcon={<AddIcon />}
          aria-label="Create new event"
        >
          {"Create User"}
        </Button>
      </Box>
      <Widget sx={{ flex: 1,  width: "100%", display: "flex", flexDirection: "column", gap: 2 }}>
        <Stack spacing={2} sx={{ minWidth: "100%", display: "grid", flex: 1 }}>
          <DataGrid
            columns={columns}
            rows={usersRows}
            initialState={{
              pagination: { 
                paginationModel: { 
                  page: 0,        
                  pageSize: 15               
                } 
              },
            }}
          />
        </Stack>
      </Widget>
      <CreateUserDialog />
      <EditUserDialog />
      {DeleteUserDialog}
    </>
  );
});

UsersScene.displayName = "UsersScene";
