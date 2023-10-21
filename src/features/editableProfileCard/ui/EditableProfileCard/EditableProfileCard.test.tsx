import { ComponentRender } from "shared/lib/tests/ComponentRender/ComponentRender";
import { EditableProfileCard } from "./EditableProfileCard";
import { Profile } from "entities/Profile";
import { Currency } from "entities/Currency";
import { Country } from "entities/Country";
import { profileReducer } from "../../model/slice/profileSlice";
import { userEvent } from "@testing-library/user-event";
import { screen } from "@testing-library/react";
import { $api } from "shared/api/api";

const profile: Profile = {
  id: "1",
  first: "admin",
  lastname: "adminov",
  age: 29,
  currency: Currency.RUB,
  country: Country.Russia,
  city: "Moscow",
  username: "adminovich",
};

const options = {
  initialState: {
    profile: {
      readonly: true,
      data: profile,
      form: profile,
    },
    user: {
      authData: { id: "1", username: "adminovich" },
    },
  },
  asyncReducers: {
    profile: profileReducer,
  },
};

describe("features/editableProfileCard", () => {
  test("Режим ридонли должен переключиться", async () => {
    ComponentRender(<EditableProfileCard id={"1"} />, options);
    await userEvent.click(
      screen.getByTestId("EditableProfileCardHeader.EditButton")
    );
    expect(
      screen.getByTestId("EditableProfileCardHeader.CancelButton")
    ).toBeInTheDocument();
  });

  test("При отмене возвращаются исходные значения", async () => {
    ComponentRender(<EditableProfileCard id={"1"} />, options);
    await userEvent.click(
      screen.getByTestId("EditableProfileCardHeader.EditButton")
    );
    await userEvent.clear(screen.getByTestId("ProfileCard.firstname"));
    await userEvent.clear(screen.getByTestId("ProfileCard.lastname"));

    await userEvent.type(screen.getByTestId("ProfileCard.firstname"), "user");
    await userEvent.type(screen.getByTestId("ProfileCard.lastname"), "user1");

    expect(screen.getByTestId("ProfileCard.firstname")).toHaveValue("user");
    expect(screen.getByTestId("ProfileCard.lastname")).toHaveValue("user1");

    await userEvent.click(
      screen.getByTestId("EditableProfileCardHeader.CancelButton")
    );

    expect(screen.getByTestId("ProfileCard.firstname")).toHaveValue("admin");
    expect(screen.getByTestId("ProfileCard.lastname")).toHaveValue("adminov");
  });

  test("Появляется ошибка", async () => {
    ComponentRender(<EditableProfileCard id={"1"} />, options);
    await userEvent.click(
      screen.getByTestId("EditableProfileCardHeader.EditButton")
    );
    await userEvent.clear(screen.getByTestId("ProfileCard.firstname"));

    await userEvent.click(
      screen.getByTestId("EditableProfileCardHeader.SaveButton")
    );

    expect(
      screen.getByTestId("EditableProfileCard.Error.Paragraph")
    ).toBeInTheDocument();
  });

  test("Если нет ошибок валидации должен уйти PUT запрос", async () => {
    const mockPutReq = jest.spyOn($api, "put");

    ComponentRender(<EditableProfileCard id={"1"} />, options);
    await userEvent.click(
      screen.getByTestId("EditableProfileCardHeader.EditButton")
    );

    await userEvent.click(
      screen.getByTestId("EditableProfileCardHeader.SaveButton")
    );

    expect(mockPutReq).toHaveBeenCalled();
  });
});
